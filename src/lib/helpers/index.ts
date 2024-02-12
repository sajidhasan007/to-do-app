import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const generateRandomId = () => {
	const timestamp = new Date().getTime();
	const random = Math.random().toString(36).substr(2, 9);
	return timestamp + random;
};
