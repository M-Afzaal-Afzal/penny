"use client";

import { useEffect, useRef, useState } from "react";
import { CONTRACT_ADDRESS } from "@/lib/constants";

/** Writes text to the clipboard, falling back to execCommand; true on success. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
}

/** The click-to-copy contract address line in the hero. */
export function ContractAddressLine() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copy = async () => {
    if (!(await copyText(CONTRACT_ADDRESS))) return;
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1400);
  };

  return (
    <button type="button" className="ca-line" title="Click to copy" onClick={copy}>
      <span className="lbl">CA</span>
      <span className="addr">{CONTRACT_ADDRESS}</span>
      <span className="mono">{copied ? "[COPIED]" : "[COPY]"}</span>
    </button>
  );
}
