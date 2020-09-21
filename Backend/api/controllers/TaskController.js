/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    getAllTasks: async function (req, res) {
        try {
            const myUser = await User.findOne({
                id: req.query.userId
            }).populate('company');

            const myTeam = await Team.findOne({
                company: myUser.company.id
            }).populate('projects');
            const myTasks = await Task.find({
                project: myTeam.projects.map(item => item.id)
            })
            // req.body.profile = profile.id

            // let createdUser = await User.create(req.body).fetch();
            return res.status(201).json({ tasks: myTasks});

        } catch (err) {
            return res.status(404).json({ err: err });
        }
    },
};