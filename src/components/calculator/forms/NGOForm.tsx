interface Props {
  documents: number;
  setDocuments: (value: number) => void;

  grantProjects: number;
  setGrantProjects: (value: number) => void;
}

export default function NGOForm({
  documents,
  setDocuments,
  grantProjects,
  setGrantProjects,
}: Props) {
  return (
    <div className="space-y-10">

      <div>
        <div className="mb-2 flex justify-between">
          <span>Документів</span>

          <strong>{documents}</strong>
        </div>

        <input
          type="range"
          min={0}
          max={400}
          value={documents}
          onChange={(e) => setDocuments(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <div className="mb-2 flex justify-between">
          <span>Грантових проєктів</span>

          <strong>{grantProjects}</strong>
        </div>

        <input
          type="range"
          min={0}
          max={20}
          value={grantProjects}
          onChange={(e) =>
            setGrantProjects(Number(e.target.value))
          }
          className="w-full"
        />
      </div>

    </div>
  );
}

