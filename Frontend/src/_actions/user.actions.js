import { userService } from '../_services';
import { userConstants } from '../_constants/user.constants';

const getUser = (userId) => async (dispatch) => {
    function saveUser(user) {
        return { type: userConstants.USER_SAVE_ONE, user };
    }
    try {
        const newUser = await userService.getUserById(userId);

        if (newUser && newUser.company) {
            const newCompany = await userService.getCompanyById(newUser.company.id);
            if (newCompany && newCompany.teams && newCompany.teams.length > 0) {
                for (let index = 0; index < newCompany.teams.length; index++) {
                    const team = newCompany.teams[index];
                    const newTeam = await userService.getTeamById(team.id);
                    newCompany.teams[index] = newTeam;
                }
            }
            newUser.company = newCompany;
        }
        console.log('NEW U', newUser);
        if (newUser) {
            localStorage.setItem('user', JSON.stringify({ ...newUser, loggedIn: true }));
            dispatch(saveUser(newUser));
        } else {
            return { };
        }        
    } catch (error) {
        return {}
    }

};

export const userActions = {
    getUser,
};
