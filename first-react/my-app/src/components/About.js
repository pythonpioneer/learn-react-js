import React from 'react';
import { useLocation } from 'react-router-dom';

export default function About() {

  const useLoc = useLocation();  // use location hook
  console.log(useLoc?.state?.loc);

  // fetching data from use location hook
  return (
    <div>
      About {useLoc?.state?.loc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, consequatur! Quo, amet veniam, quia harum reiciendis dicta est aut voluptate eveniet esse ipsa similique dolor vel molestiae omnis saepe necessitatibus ipsum ab. Quos reiciendis dicta ipsa quibusdam laborum distinctio! Eligendi enim a reiciendis provident, fugiat id assumenda quia. Numquam atque molestiae aperiam a minus optio magni vero cumque soluta repellat necessitatibus, odit porro pariatur accusamus adipisci! Cupiditate, dicta. Natus vitae explicabo dolores et consectetur magnam. Pariatur natus id magnam dolor architecto nobis est tempora, sed officia ipsa officiis itaque veritatis debitis facere nulla assumenda, repellendus in fugiat praesentium totam recusandae?
    </div>
  )
}
