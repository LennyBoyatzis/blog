import React, { Component } from 'react';
import diagram from '../../../public/rl-agent-env.png';
import '../../../node_modules/highlight.js/styles/hybrid.css';
import '../../styles/containers/post.css';
const Highlight = require('react-highlight');
import rlCodeSnippet from '../code-snippets/reinforcement-learning';

export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <h1 className="post-content post-headline">Intro to Reinforcement Learning</h1>
        <p className="post-content">
          Reinforcement learning is a branch of machine learning concerned with taking sequences of actions. In Reinforcement Learning, an agent must learn what to do with out being shown examples of how to behave. Instead of being shown examples from an teacher (like in supervised learning) an agent receives feedback from the environment in the form of rewards and learns how to behave from this agent-environment feedback loop. To get further into this we need to consider the agent-environment cycle.
        </p>
        <div className="post-content">
          <img src={diagram} alt="diagram" className="img-resonsive"/>
        </div>
        <p className="post-content">
          The steps to this cycle are:
        </p>
        <ul className="post-content list">
          <li><span className="bold">(1)</span> - The agent perceives the environments current state</li>
          <li><span className="bold">(2)</span> - The agent then uses its Policy (π) to select an action</li>
          <li><span className="bold">(3)</span> - The agent then takes the action, resulting in</li>
          <li><span className="bold">(4)</span> - A new environment state and with this, positive or negative feedback</li>
        </ul>
        <p className="post-content">
          Before we get further into Reinforcement Learning, we need a more concrete model to formally describe this problem of decision making. Enter Markov Decision Processes.
        </p>
        <h2 className="post-content">Markov Decision Processes (MDP's)</h2>
        <p className="post-content">
          MDP's are a framework for modelling decision making in situations where outcomes are partly random and partly under the control of the decision maker. They describe this problem in terms of the following parameters
        </p>
        <ul className="post-content list">
          <li><span className="bold">States (s)</span> - The various states of the environment</li>
          <li><span className="bold">Actions (a)</span> - Actions that an agent can perform</li>
          <li><span className="bold">Model T(s, a, s')</span> - Transition function (the probability of ending up in some new state (s') when you take action (a) and are in the current state (s)</li>
          <li><span className="bold">Reward (r)</span> - Reward function</li>
          <li><span className="bold">(π)</span> - The agents policy</li>
        </ul>
        <p className="post-content">
          Additionally, MDP's have two key properties.
        </p>
        <ul className="post-content list">
          <li>
            (1) - Only the present matters, meaning that the transtion function defined above only depends on the current state (which can contain information about previous states).
          </li>
          <li>
            (2) - The Transition and Reward functions are stationary and do not change over time
          </li>
        </ul>
        <p className="post-content">
          The solution to an MDP is called a policy (π). A policy is a function which takes in state and returns an action. With this in mind, a lookup table comprised of state-action pairs is a basic example of a policy. This is represented in the code below.
        </p>
        <div className="code-sample">
          <Highlight className="python">
            {rlCodeSnippet}
          </Highlight>
        </div>
        <p className="post-content">
          An optimal policy (π*) is one which maximises your long term reward. Reinforcement Learning refers to the task of using observed rewards to learn an optimal Policy for an environment.
        </p>
      </div>
    );
  }
}
