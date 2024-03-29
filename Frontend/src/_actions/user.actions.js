import { userService } from '../_services';
import { userConstants } from '../_constants/user.constants';

const getUser = (userId) => async(dispatch) => {
  function saveUser(user) {
    return { type: userConstants.USER_SAVE_ONE, user };
  }
  let newUser = await userService.getUserById(userId);
  if (newUser) {
    localStorage.setItem("user", JSON.stringify({...newUser, loggedIn: true}));
  }
  if (newUser && newUser.company) {
    let newCompany = await userService.getCompanyById(newUser.company.id);
    if (newCompany && newCompany.teams && newCompany.teams.length > 0) {
      for (let index = 0; index < newCompany.teams.length; index++) {
        const team = newCompany.teams[index];
        let newTeam = await userService.getTeamById(team.id);
        newCompany.teams[index] = newTeam
      }
    }
    newUser.company = newCompany
  }
  
  dispatch(saveUser(newUser));
};

export const userActions = {
  getUser,
};
