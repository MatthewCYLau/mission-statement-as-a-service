import React from "react";

type StatementProps = {
  message: string;
};

const Statement: React.FunctionComponent<StatementProps> = ({ message }) => {
  return (
    <section className="statement">
      <div className="statement__content container container--pall">
        <h1>Your corporate mission statement</h1>
        <p>{message}</p>
      </div>
    </section>
  );
};

export default Statement;
