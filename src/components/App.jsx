import React from "react";
import { Tooltip } from "./Tooltip";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed
          labore hic maxime vitae quod voluptates, nostrum natus nam possimus,
          dolor iusto, dolores alias provident facilis ea? Architecto, similique
          veritatis?
        </p>

        <div className="container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
          veritatis quis tenetur consequuntur recusandae placeat. Nostrum culpa
          eligendi incidunt eos hic earum modi illo! Nam voluptatem impedit
          <Tooltip title="Hello world">Sonu Ram</Tooltip>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatem magni recusandae sapiente perferendis ab unde modi, neque
            sequi veritatis optio soluta non, provident praesentium? Autem
            obcaecati unde quibusdam dictaAA
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatem magni recusandae sapiente perferendis ab unde modi, neque
            sequi veritatis optio soluta non, provident praesentium? Autem
            obcaecati unde quibusdam dictaAA
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatem magni recusandae sapiente perferendis ab unde modi, neque
            sequi veritatis optio soluta non, provident praesentium? Autem
            obcaecati unde quibusdam dictaAA
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatem magni recusandae sapiente perferendis ab unde modi, neque
            sequi veritatis optio soluta non, provident praesentium? Autem
            obcaecati unde quibusdam dictaAA
          </p>
        </div>
      </div>
    );
  }
}

export { App };
