import {motion} from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Zabani = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            CEO & Lead Developer <span className="text-textGreen tracking-wide">@Zabani</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            July 2023 - Present
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Founded Zabani, an English learning app tailored for Pakistanis.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Incharge of the overall working model of the app, the design and front-end process
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Policy and vision of the startup is also handled by me as the CEO.
            </li>
        </ul>
    </motion.div>
  )
}

export default Zabani