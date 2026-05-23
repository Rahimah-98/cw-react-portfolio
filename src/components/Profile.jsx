export const Profile = ({ photo, title, bio }) => {
  return (
    <article className='w-full max-w-sm md:max-w-md mx-auto md:mx-0 md:mr-24'>
      <div className='relative max-w-lg mx-auto glass rounded-full shadow-xl shadow-primary/25'>
        <img
          src={photo}
          alt={title}
          className='w-full aspect-square object-cover rounded-full'
        />

        <div className='absolute -top-4 -left-1 md:-left-4 glass rounded-xl px-4 py-3'>
          <div className='text-2xl font-bold text-primary'>{title}</div>
        </div>

        <div className='absolute -bottom-4 bg-background/85 glass rounded-xl px-4 py-3'>
          <span className='text-sm font-medium'>
            <span className='text-primary'>Bio_: </span> {bio}
          </span>
        </div>
      </div>
    </article>
  );
};
