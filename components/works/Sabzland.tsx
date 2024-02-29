import {motion} from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Sabzland = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Technical Team <span className="text-textGreen tracking-wide">@Sabzland Tech</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Feb 2023 - July 2023
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Technical lead for Sabzland, a startup in my university.
                </li>
                <li className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1">
                        <TiArrowForward />
                    </span>
                    Handled maintainance and quality assurance of the front-end of their ReactJS web app.
                </li>
            </ul>
        </motion.div>
      )
}

export default Sabzland