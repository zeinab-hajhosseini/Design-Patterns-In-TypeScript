import { Light } from "./light";
import { Switch } from "./switch";
import { SwitchOffCommand } from "./SwitchOffCommand";
import { SwitchOnCommand } from "./SwitchOnCommand";

const LIGHT = new Light();

const SWITCH = new Switch();

const CommandOn = new SwitchOnCommand(LIGHT);
const CommandOff = new SwitchOffCommand(LIGHT);


SWITCH.register("On Command", CommandOn);
SWITCH.register("Off Command", CommandOff);

SWITCH.execute("On Command");
SWITCH.execute("Off Command");

SWITCH.execute("On Command");
SWITCH.execute("Off Command");

SWITCH.execute("On Command");
SWITCH.execute("Off Command");

SWITCH.showHistory();



