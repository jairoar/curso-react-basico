import React from "react";

import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar.js";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

export default function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  if (filteredBadges.length === 0) {
    return (
      <>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            autoFocus
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            autoFocus
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <div className="ListItem">
                    <Gravatar className="ListAvatar" email={badge.email} />
                    <div className="ListInfo">
                      <p className="ListInfo__name">
                        {badge.firstName} {badge.lastName}
                      </p>
                      <p className="ListInfo__twitter">
                        <FontAwesomeIcon icon={faTwitter} /> @{badge.twitter}
                      </p>
                      <p className="ListInfo__jobtitle">{badge.jobTitle}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
