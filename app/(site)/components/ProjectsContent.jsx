"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import BorderLines from "./BorderLines";
import Accordion from "./Accordion";
import PaginatedItems from "./PaginatedItems";

export default function ProjectsContent({ projects }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredItems, setFilteredItems] = useState(projects);

  const date = new Date().toISOString().substring(0, 10);

  const allTags = projects?.map((item) => item.tags).flat();
  //get unique tags
  const uniqueTags = [...new Set(allTags)];

  const changeTag = (tag) => {
    //if tag is clicked, add tag to selectedTags. if tag is already there, remove it but keep the rest
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    }
    //if tag is not clicked, add tag to selectedTags
    else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    //set filtered articles to articles that matches selected tags
    setFilteredItems(
      projects?.filter((item) => {
        return selectedTags.every((tag) => item.tags.includes(tag));
      })
    );

    //if no tags are selected, set filtered articles to all articles
    if (selectedTags.length === 0) {
      setFilteredItems(projects);
    }
  }, [selectedTags, projects]);

  useEffect(() => {
    //set filtered articles to articles that matches selected tags
    setFilteredItems(
      projects?.filter((item) => {
        return selectedTags.every((tag) => item.tags.includes(tag));
      })
    );

    //if no tags are selected, set filtered articles to all articles
    if (selectedTags.length === 0) {
      setFilteredItems(projects);
    }
  }, [selectedTags, projects]);

  return (
    <div className="mt-[140px]">
      <div className="p-8 text-darkGreen max-w-[1600px] mx-auto">
        <h1>Projekter</h1>
        <BorderLines side="left" innerStyle="p-4">
          <Accordion title="Find by latest tags">
            <div className="flex gap-4">
              {uniqueTags.map((tag, i) => (
                <div
                  key={i}
                  onClick={() => changeTag(tag)}
                  className={clsx(selectedTags.includes(tag) && "font-bold")}
                >
                  {tag}
                </div>
              ))}
            </div>
          </Accordion>
        </BorderLines>
      </div>
      <div className="bg-darkGreen">
        {filteredItems.filter((_) => _.date >= date).length > 0 && (
          <div className="flex flex-col text-white px-8 pt-8 max-w-[1600px] mx-auto">
            <h2>Kommende Projekter</h2>
            <PaginatedItems
              itemsPerPage={6}
              items={filteredItems.filter((_) => _.date >= date)}
              selectedTags={selectedTags}
              gridLayout="events-inverted"
              scrollToTop={false}
            />
          </div>
        )}
      </div>
      <div className="h-[200px] bg-gradient-to-b from-darkGreen to-lightGreen"></div>
      <div className="bg-lightGreen">
        {filteredItems.filter((_) => _.date < date).length > 0 && (
          <div className="flex flex-col px-8 pb-8 max-w-[1600px] mx-auto">
            <h2>Forrige Projekter</h2>
            <PaginatedItems
              itemsPerPage={6}
              items={filteredItems.filter((_) => _.date < date)}
              selectedTags={selectedTags}
              gridLayout="events"
              scrollToTop={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
