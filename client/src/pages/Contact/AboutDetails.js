import React from 'react';

export default function AboutDetails() {
  return (
    <div className='my-2 px-2 w-full overflow-hidden card dark:border-gray-400'>
      <h2 className='hero'>FAQs</h2>
      <h3 className="underline">Why is there no in-built translator in the app?</h3>
      <p>This app encourages users to do their own research and thus hopefully better retain the new information. Don't worry though, you  have many other readers helping you translate </p>
      <br />
      <h3 className="underline">Why is my language not available?</h3>
      <p>Currently the site only has a small set of hardcoded languages. Each new language brings new coding challenges to the forefront, but rest assured when more are added the app functionality should also improve. E.g. character based languages do not work with the current highlighting system.</p>
    </div>
  );
}
