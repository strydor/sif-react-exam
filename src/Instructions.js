import React from "react";
import { Redirect, Link } from "react-router-dom";

const Instructions = ({ location: { pathname } }) => {
  if (pathname !== "/instructions") {
    return <Redirect to="/instructions" />;
  }
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <section>
        <h2>Getting Started</h2>
        <p>Fork this CodeSandbox to get started.</p>
        <a href="https://codesandbox.io/s/ovonylqp69">
          <img
            alt="Edit React Developer Test"
            src="https://codesandbox.io/static/img/play-codesandbox.svg"
          />
        </a>

        <p>
          A <strong>Requests</strong> component has been created for you as a
          starting place. Feel free to create additional files or use external
          libraries (not jQuery) as needed to simplify the task. However, ensure
          that all logic around sorting, updating, and removing records is
          handled in your own code. You should not need to modify any of the
          other existing files.
        </p>
      </section>
      <section>
        <h2>Getting Request Data</h2>
        <p>
          We have provided an API module for getting request data into your
          application. There are two functions exported from the API module for
          fetching requests. The first, "getRequests", returns a promise;
          whereas the second, "getRequestsSync", synchronously returns an array
          of requests. It is preferred to use the async version since it more
          closesly resembles a real-world scenario but handling async operations
          in React adds some complexity. If you are new to React or are having
          difficulty implementing your solution with the async version, you can
          use the synchronous API.
        </p>
        <p>
        </p>
      </section>
      <section>
        <h2>Requirements</h2>
        <p>
          Please take the provided <Link to="/wireframe">wireframe</Link> and
          implement the functionality using{" "}
          <a target="_blank" href="https://reactjs.org/docs/hello-world.html">
            ReactJS
          </a>
          . If any requirements are unclear, note your questions in the code
          comments, but make an assumption and proceed.
        </p>
        <ol>
          <li>
            Create a frame collection
            <ul>
              <li>
                Order players by height descending
              </li>
              <li>
                Start from the center, succeeding players will alternate between rightmost and leftmost position (infographic is available in Wireframe for a visual reference)
              </li>
            </ul>
          </li>
          <li>
            Each frame block will represent the player
            <ul>
              <li>Display full name, height and image</li>
            </ul>
          </li>
          <li>
            Base the number of rows and number of players per row from the `row_reference` key returned via Api.js
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Instructions;
