import { useState } from "react";

export default function useModal(initial = false) {
  const [open, setOpen] = useState(initial);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return [open, openModal, closeModal];
}
