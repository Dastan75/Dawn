/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// var bcrypt = require('bcrypt');

module.exports = {
    getAllProjects: async function (req, res) {
        try {
            const myUser = await User.findOne({
                id: req.query.userId
            });

            console.log('USER', myUser);

            const myTeam = await Team.findOne({
                company: myUser.company
            }).populate('projects');

            console.log('TEAM', myTeam)

            const myTasks = await Task.find({
                project: myTeam.projects.map(item => item.id)
            })

            console.log('TASKS', myTasks);
            // req.body.profile = profile.id

            // let createdUser = await User.create(req.body).fetch();
            return res.status(201).json({ tasks: myTasks, projects: myTeam.projects });

        } catch (err) {
            console.log('PROBLEMS')
            return res.status(404).json({ err: err });
        }
    },
};