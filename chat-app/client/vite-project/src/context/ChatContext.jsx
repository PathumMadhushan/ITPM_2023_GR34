import { createContext, useEffect, useState } from "react";
import { baseUrl, getRequest,postRequest } from "../utils/services";

export const ChatContext = createContext();