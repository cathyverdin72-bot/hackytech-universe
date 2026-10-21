
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Play,
  RotateCcw,
  ShieldCheck,
  Terminal,
} from "lucide-react";

type WorldId = "eman" | "grey" | "businessflow" | "oyosky";

type WorldDemoProps = {
  worldId: WorldId;
  worldName: string;
};

type DemoScenario = {
  title: string;
  description: string;
  steps: string[];
  resultTitle: string;
  result: string;
};

const scenarios: Record<WorldId, DemoScenario> = {
  eman: {
    title: "Intelligence coordination",
    description:
      "Simulate how an intelligence engine could organize a request into controlled steps.",
    steps: [
      "Receive and classify the request",
      "Identify required capabilities",
      "Prepare a structured action plan",
      "Return the result for review",
    ],
    resultTitle: "Coordination plan prepared",
    result:
      "The request has been organized into four stages. No external service was contacted and no real-world action was executed.",
  },
  grey: {
    title: "AI workspace workflow",
    description:
      "Explore a sample research workflow with a human review checkpoint before action.",
    steps: [
      "Define the research question",
      "Organize the information requirements",
      "Prepare a draft finding",
      "Pause for human review",
    ],
    resultTitle: "Review checkpoint reached",
    result:
      "A sample finding is ready for review. This demonstration does not perform live web research or send messages.",
  },
  businessflow: {
    title: "Business improvement cycle",
    description:
      "Walk through a sample process for turning a business question into a measurable experiment.",
    steps: [
      "Define the business objective",
      "Select a measurable indicator",
      "Propose a small experiment",
      "Review the hypothetical outcome",
    ],
    resultTitle: "Experiment plan prepared",
    result:
      "A sample experiment is ready for evaluation. No business records were accessed and no real customer data was changed.",
  },
  oyosky: {
    title: "Resilience and recovery",
    description:
      "Simulate a controlled recovery sequence with a verification checkpoint.",
    steps: [
      "Detect a hypothetical service interruption",
      "Assess the recovery boundary",
      "Prepare a limited recovery plan",
      "Verify the simulated outcome",
    ],
    resultTitle: "Recovery simulation complete",
    result:
      "The hypothetical service passed the simulated recovery checkpoint. No server, device, or production system was accessed.",
  },
};

export default function WorldDemo({
  worldId,
  worldName,
}: WorldDemoProps) {
  const [completedWorld, setCompletedWorld] = useState<WorldId | null>(null);
  const [runCount, setRunCount] = useState(0);
  const scenario = scenarios[worldId];
  const isComplete = completedWorld === worldId;

  function runDemo() {
    setCompletedWorld(worldId);
    setRunCount((count) => count + 1);
  }

  function resetDemo() {
    setCompletedWorld(null);
  }

  return (
    <section className="world-demo" aria-labelledby="world-demo-title">
      <div className="world-demo-heading">
        <div className="world-demo-title-group">
          <span className="world-demo-icon">
            <Terminal size={19} />
          </span>
          <div>
            <span className="detail-kicker">INTERACTIVE LAB / LOCAL SIMULATION</span>
            <h3 id="world-demo-title">{scenario.title}</h3>
          </div>
        </div>

        <span className="demo-mode-badge">
          <CircleDot size={11} />
          DEMO MODE
        </span>
      </div>

      <p className="world-demo-description">{scenario.description}</p>

      <div className="demo-flow" aria-label="Demonstration steps">
        {scenario.steps.map((step, index) => {
          const stepComplete = isComplete;

          return (
            <div
              className={`demo-step${stepComplete ? " is-complete" : ""}`}
              key={step}
            >
              <span className="demo-step-number">
                {stepComplete ? <CheckCircle2 size={17} /> : `0${index + 1}`}
              </span>
              <span className="demo-step-label">{step}</span>
              {index < scenario.steps.length - 1 && (
                <ArrowRight className="demo-step-arrow" size={15} />
              )}
            </div>
          );
        })}
      </div>

      {isComplete ? (
        <div className="demo-result" role="status" aria-live="polite">
          <div className="demo-result-icon">
            <ShieldCheck size={21} />
          </div>
          <div className="demo-result-copy">
            <span className="detail-kicker">SIMULATION RESULT</span>
            <h4>{scenario.resultTitle}</h4>
            <p>{scenario.result}</p>
          </div>
        </div>
      ) : (
        <div className="demo-ready" role="status">
          <span className="status-dot" />
          <span>Ready to run. No external systems will be contacted.</span>
        </div>
      )}

      <div className="world-demo-footer">
        <span className="demo-run-count">
          {runCount > 0
            ? `Local runs this session: ${runCount}`
            : `Selected world: ${worldName}`}
        </span>

        <div className="demo-actions">
          {isComplete && (
            <button
              className="demo-reset-button"
              type="button"
              onClick={resetDemo}
            >
              <RotateCcw size={14} />
              Reset
            </button>
          )}

          <button
            className="demo-run-button"
            type="button"
            onClick={runDemo}
          >
            <Play size={15} />
            {isComplete ? "Run again" : "Run demonstration"}
          </button>
        </div>
      </div>
    </section>
  );
}
