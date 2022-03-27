import Link from "next/link";
import * as React from "react";
import { Bird } from "../../types/bird";
import { Airport } from "../../types/airport";
import { Flight } from "../../types/flight";
import { Impact } from "../../types/impact";

export interface ICollectionProps {
  collection: Bird[] | Airport[] | Flight[] | Impact[];
  label: string;
  item: string;
  name: string;
}

export function Collection(props: ICollectionProps) {
  const { collection, label, item, name } = props;

  return (
    <article>
      <header>
        <h3>{name}</h3>
      </header>
      <section>
        <ul>
          {collection.map((i: any) => (
            <li key={i?._id}>
              <Link href={`/${item}/[id]`} as={`/${item}/${i?._id}`}>
                <a>{i[label]}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
