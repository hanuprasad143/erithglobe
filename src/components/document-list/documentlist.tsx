const FILE_BASE = "https://backend-test-yeyr.onrender.com/uploads";

const getFileUrl = (url?: string) => {
  if (!url) return "#";
  if (url.startsWith("http")) return url;
  return `${FILE_BASE}/${url.replace(/^\/+/, "")}`;
};

const getFileType = (name: string) => {
  const ext = name.split(".").pop()?.toLowerCase();

  if (ext === "pdf") return "PDF";
  if (["doc", "docx"].includes(ext || "")) return "DOC";
  if (["xls", "xlsx"].includes(ext || "")) return "EXCEL";
  return ext?.toUpperCase() || "FILE";
};

type Document = {
  id: number;
  product_id: number;
  product_type: string;
  document_type?: string | null;
  language?: string | null;
  title?: string | null;
  file_url?: string | null;
  created_at?: string | null;
};

export function DocumentList({ documents }: { documents: Document[] }) {
  return (
    <div style={{ padding: "0px" }}>
      {/* TITLE */}
      <h4
        style={{
          color: "#292929",
          fontSize: "18px",
          margin: "0 0 6px",
          textAlign: "left",
        }}
      >
        Resources
      </h4>

      {/* LIST */}
      {documents.slice(0, 2).map((doc) => {
        const fileUrl = getFileUrl(doc.file_url ?? undefined);
        const fileName = doc.file_url?.split("/").pop() || "Document";
        const fileType = getFileType(fileName);
        console.log(fileType);

        return (
          <div
            key={doc.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            {/* LEFT */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "18px" }}>📄</span>

              <div>
                <p
                  style={{
                    fontSize: "14px",
                    margin: 0,
                    color: "#292929",
                  }}
                >
                  {doc.title}
                </p>
                {/* 
                <span
                  style={{
                    fontSize: "12px",
                    color: "#999",
                  }}
                >
                  {fileType} • {fileName}
                </span> */}
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid #1d3a72",
                  color: "#1d3a72",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1d3a72";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#1d3a72";
                }}
              >
                View
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
