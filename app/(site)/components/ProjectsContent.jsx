"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import BorderLines from "./BorderLines";
import Accordion from "./Accordion";
import PaginatedItems from "./PaginatedItems";

export default function ProjectsContent({ projects }) {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <p>{project.title}</p>
          </div>
        );
      })}
    </div>
  );
}
