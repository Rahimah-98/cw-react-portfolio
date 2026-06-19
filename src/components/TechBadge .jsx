export const TechBadge = ({tag}) => {
  return (
    <div>
      <span
        key={tag}
        className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>
        {tag}
      </span>
    </div>
  );
};

