import { useEffect, useLayoutEffect } from "react";

const CAN_USE_DOM =
	typeof window !== "undefined" &&
	typeof window.document !== "undefined" &&
	typeof window.document.createElement !== "undefined";

const useLayoutEffectImpl = CAN_USE_DOM ? useLayoutEffect : useEffect;

export default useLayoutEffectImpl;
