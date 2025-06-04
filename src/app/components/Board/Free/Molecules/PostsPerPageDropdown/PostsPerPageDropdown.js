"use client";
import DropDownStyle from './PostsPerPageDropdown.module.css';
import { useState, useRef, useEffect } from 'react';

const OPTIONS = [10, 20, 30, 50, 100];

export default function PostsPerPageDropdown({
  value = 30, onChange = () => {},
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (btnRef.current && !btnRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className={DropDownStyle.dropdown} ref={btnRef}>
      <button
        className={DropDownStyle.button}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {value}개 <span className={DropDownStyle.arrow}>⌵</span>
      </button>
      {open && (
        <ul className={DropDownStyle.menu} tabIndex={-1} role="listbox">
          {OPTIONS.map((opt) => (
            <li
              key={opt}
              className={`${DropDownStyle.menuItem} ${opt === value ? DropDownStyle.selected : ""}`}
              role="option"
              aria-selected={opt === value}
              onClick={() => { onChange(opt); setOpen(false); }}
            >
              {opt}개
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}