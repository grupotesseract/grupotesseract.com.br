import React from 'react';
import logo from '../../docs/image/logo.svg';
import Image from 'next/image';

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo(props: LogoProps) {
  return (
    <Image src={logo} alt="logo" width={props.width} height={props.height} />
  );
}
