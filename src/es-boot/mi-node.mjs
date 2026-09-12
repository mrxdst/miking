import { nodeEnv } from "../stdlib/ecmascript/hosts/node.mjs";
import main from "./mi.mjs";

const argv = process.argv.slice(1);
const env = nodeEnv({argv});

main(env);
