
export const ContactPreview = ({ formData }) => {
  return (
    <div className='p-6 glass rounded-3xl'>
      <h3 className='font-serif italic text-primary text-lg font-semibold mb-6'>
        Live Preview
      </h3>

      <div className='space-y-2 text-sm text-muted-foreground transition-all duration-300'>
        <div className='flex justify-between items-center'>
          <h4 className='font-semibold text-ui-text'>
            {formData.name || 'Jane Doe'}
          </h4>
          <p className='text-xs text-primary'>
            {formData.email || 'janedoe@email.com'}
          </p>
        </div>

        <div className='flex gap-4 border-t border-border pt-4'>
          <p className='whitespace-pre-wrap wrap-break-words max-h-10 overflow-y-auto'>
            {formData.message || '💬 Hello, I love your portfolio...'}
          </p>
        </div>
      </div>
    </div>
  );
};
