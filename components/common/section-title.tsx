interface Props {
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-center">{title}</h2>;
};
