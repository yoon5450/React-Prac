import React from "react";

type UserDetailProps = {
  name?: string;
  city?: string;
  email?: string;
}

const S = {color:'inherit', textDecoration:'none'}

function UserDetail({name, email, city}: UserDetailProps) {
  return (
    <>
      <li>
        <strong>{name}</strong>-
        <span>
          <a style={S} href={`mailto:${email}`}>
            {email} ( {city} )
          </a>
        </span>
      </li>
    </>
  );
}

export default UserDetail;
