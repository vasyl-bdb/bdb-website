interface Props {
  documents: number;
  setDocuments: (value: number) => void;

  projects: number;
  setProjects: (value: number) => void;
}

export default function CharityForm({
  documents,
  setDocuments,
  projects,
  setProjects,
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
          max={500}
          value={documents}
          onChange={(e) => setDocuments(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <div className="mb-2 flex justify-between">
          <span>Благодійних проєктів</span>

          <strong>{projects}</strong>
        </div>

        <input
          type="range"
          min={0}
          max={30}
          value={projects}
          onChange={(e) => setProjects(Number(e.target.value))}
          className="w-full"
        />
      </div>

    </div>
  );
}

