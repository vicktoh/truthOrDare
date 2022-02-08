import { createContext } from "react";

import { Questions } from "../types";

export const QuestionsContext = createContext<Questions | null>(null);


