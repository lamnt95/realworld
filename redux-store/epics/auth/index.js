import initAuthStartEpic from "./initAuthStart";
import initAuthSuccessEpic from "./initAuthSuccess";
import registerStartEpic from "./registerStart";

const epics = [initAuthStartEpic, initAuthSuccessEpic, registerStartEpic];

export default epics;
