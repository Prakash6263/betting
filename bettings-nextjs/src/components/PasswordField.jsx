'use client';
import { useState } from 'react';

export default function PasswordField({ icon = 'bi', inputClass = 'form-control', dark = false, style, ...rest }) {
  const [show, setShow] = useState(false);
  const base = icon === 'fa' ? 'fa-solid fa-eye' : 'bi bi-eye';
  const iconCls = base + (show ? '-slash' : '');
  return (
    <div className={"position-relative"} style={style}>
      <input
        {...rest}
        type={show ? 'text' : 'password'}
        className={inputClass}
        style={{ paddingRight: '2.4rem' }}
      />
      <button
        type={"button"}
        tabIndex={-1}
        aria-label={show ? 'Hide password' : 'Show password'}
        onClick={() => setShow((v) => !v)}
        style={{
          position: 'absolute',
          right: '9px',
          top: '50%',
          transform: 'translateY(-50%)',
          border: 0,
          background: 'transparent',
          padding: '4px 2px',
          color: dark ? '#8b949e' : '#6c757d',
          cursor: 'pointer',
          fontSize: '0.95rem',
        }}
      >
        <i className={iconCls}></i>
      </button>
    </div>
  );
}
