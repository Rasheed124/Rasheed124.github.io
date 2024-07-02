import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Wordpress Developer
        <span className="text-textGreen tracking-wide">@ZenithPrecision</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2020 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed elegant and responsive websites using custom WordPress themes and PHP, enabling clients to grow their businesses and reach their target audience.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          Conducted comprehensive quality assurance tests to identify and rectify flaws, enhancing the usability of websites.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

          Developed bespoke WordPress themes to help customers effectively promote themselves and increase their income.

        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

Assisted in maintaining and updating web content, ensuring it remains accurate and up-to-date for visitors.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>

Provided technical support to clients, resolving issues and ensuring a smooth user experience on their websites.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
