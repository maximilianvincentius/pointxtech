import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const projects = [
  {
    name: 'phyxhub',
    stack: 'react / node / mongodb',
    steps: ['exploring', 'experimenting', 'building', 'learning'],
  },
  {
    name: 'fractals-of-entropy',
    stack: 'unity / c# / android',
    steps: ['designing', 'experimenting', 'building', 'evolving'],
  },
  {
    name: 'metro-circuit',
    stack: 'android / game development',
    steps: ['designing', 'exploring', 'building', 'iterating'],
  },
];

const sleep = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException('Animation cancelled', 'AbortError'));
      return;
    }

    const timeout = window.setTimeout(resolve, ms);

    signal.addEventListener(
      'abort',
      () => {
        window.clearTimeout(timeout);
        reject(new DOMException('Animation cancelled', 'AbortError'));
      },
      { once: true }
    );
  });

export const PointXTerminal = () => {
  const prefersReducedMotion = useReducedMotion();

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [typedCommand, setTypedCommand] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const project = projects[currentProjectIndex];

    const runSequence = async () => {
      try {
        setOutputLines([]);
        setTypedCommand('');
        setProgress(0);

        // Reduced motion: show a stable completed state.
        if (prefersReducedMotion) {
          setOutputLines([
            '$ pointx build',
            '',
            `project: ${project.name}`,
            `stack:   ${project.stack}`,
            '',
            ...project.steps.map((step) => `✓ ${step}`),
            '',
            '[<████████████████████>] 100%',
            'build complete.',
            '',
            '$ pointx next',
            'searching for the next idea...',
            '→ something new',
            '',
            '$ _',
          ]);

          return;
        }

        // --------------------------------
        // 1. Type command
        // --------------------------------

        const command = '$ pointx build';
        for (let i = 0; i <= command.length; i++) {
          if (signal.aborted) return;

          setTypedCommand(command.slice(0, i));

          await sleep(i < command.length ? 80 : 300, signal);
        }

        if (signal.aborted) return;

        setTypedCommand('');
        setOutputLines([command]);

        // --------------------------------
        // 2. Project
        // --------------------------------

        await sleep(1000, signal);

        setOutputLines((prev) => [
          ...prev,
          `project: ${project.name}`,
        ]);

        // --------------------------------
        // 3. Stack
        // --------------------------------

        await sleep(300, signal);

        setOutputLines((prev) => [
          ...prev,
          `stack:   ${project.stack}`,
        ]);

        // --------------------------------
        // 4. Blank line
        // --------------------------------

        await sleep(400, signal);

        setOutputLines((prev) => [...prev, '']);

        // --------------------------------
        // 5. Project steps
        // --------------------------------

        for (const step of project.steps) {
          await sleep(300, signal);

          setOutputLines((prev) => [
            ...prev,
            `✓ ${step}`,
          ]);
        }

        // --------------------------------
        // 6. Progress
        // --------------------------------

        await sleep(200, signal);

        setOutputLines((prev) => [...prev, '']);

        for (let p = 5; p <= 100; p += 5) {
          if (signal.aborted) return;

          setProgress(p);

          await sleep(50, signal);
        }

        // --------------------------------
        // 7. Build complete
        // --------------------------------

        await sleep(300, signal);

        setOutputLines((prev) => [
          ...prev,
          'build complete.',
        ]);

        // --------------------------------
        // 8. Next command
        // --------------------------------

        await sleep(300, signal);

        setOutputLines((prev) => [
          ...prev,
          '',
          '$ pointx next',
        ]);

        await sleep(500, signal);

        setOutputLines((prev) => [
          ...prev,
          'searching for the next idea...',
        ]);

        await sleep(500, signal);

        setOutputLines((prev) => [
          ...prev,
          '→ something new',
        ]);

        // --------------------------------
        // 9. Move to next project
        // --------------------------------

        await sleep(2500, signal);

        if (signal.aborted) return;

        setCurrentProjectIndex(
          (prev) => (prev + 1) % projects.length
        );
      } catch (error) {
        // AbortError is expected during cleanup.
        if (
          error instanceof DOMException &&
          error.name === 'AbortError'
        ) {
          return;
        }

        console.error('PointXTerminal animation error:', error);
      }
    };

    runSequence();

    return () => {
      controller.abort();
    };
  }, [currentProjectIndex, prefersReducedMotion]);

  const renderProgressBar = () => {
    const filledBlocks = Math.floor(progress / 5);
    const emptyBlocks = 20 - filledBlocks;

    return (
      <span className="font-mono text-accent">
        {'[<'}
        {'█'.repeat(filledBlocks)}
        {'░'.repeat(emptyBlocks)}
        {'>] '}
        {progress}%
      </span>
    );
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-line bg-surface/30 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </div>

          <span className="text-sm font-medium text-gray-500">
            poinxtech@admin:~$
          </span>
        </div>
      </div>

      {/* Terminal content */}
      <div className="min-h-0 flex-1 overflow-y-auto p-4 font-mono text-sm">
        {/* Currently typing command */}
        {!prefersReducedMotion && typedCommand && (
          <div className="mb-2">
            <span className="text-ink">
              {typedCommand}
            </span>

            <span className="ml-1 inline-block w-0.5 animate-pulse">
              |
            </span>
          </div>
        )}

        {/* Completed output */}
        {outputLines.map((line, index) => (
          <div key={`${line}-${index}`} className="mb-1">
            {line.startsWith('✓') ||
            line.startsWith('→') ||
            line.startsWith('$') ? (
              <span className="text-accent">
                {line}
              </span>
            ) : (
              <span className="text-ink">
                {line}
              </span>
            )}
          </div>
        ))}

        {/* Progress */}
        {!prefersReducedMotion &&
          progress > 0 &&
          progress <= 100 && (
            <div className="mb-2">
              {renderProgressBar()}
            </div>
          )}
      </div>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0, 229, 153, 0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

