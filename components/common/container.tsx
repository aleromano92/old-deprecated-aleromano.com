import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

export const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto px-5">{children}</div>;
};
