import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Clock, Edit3, X } from 'lucide-react';

type DocStatus = 'Draft' | 'In Review' | 'Signed';

interface DocumentFile {
  id: number;
  name: string;
  status: DocStatus;
}

export const DocumentChamber: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentFile[]>([
    { id: 1, name: 'Investment_Agreement_v1.pdf', status: 'Draft' },
    { id: 2, name: 'NDA_Confidentiality.pdf', status: 'In Review' }
  ]);

  const [showSignaturePad, setShowSignaturePad] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<number | null>(null);

  const getStatusBadge = (status: DocStatus) => {
    switch (status) {
      case 'Signed':
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 bg-success-50 text-success-700 rounded-full border border-success-200 font-semibold">
            <CheckCircle size={12} /> Signed
          </span>
        );
      case 'In Review':
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 bg-accent-50 text-accent-700 rounded-full border border-accent-200 font-semibold">
            <Clock size={12} /> In Review
          </span>
        );
      case 'Draft':
      default:
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full border border-neutral-300 font-semibold">
            <FileText size={12} /> Draft
          </span>
        );
    }
  };

  const handleSignDocument = () => {
    if (selectedDocId !== null) {
      setDocuments(documents.map(doc =>
        doc.id === selectedDocId ? { ...doc, status: 'Signed' } : doc
      ));
      setShowSignaturePad(false);
      setSelectedDocId(null);
      alert('📝 Document has been successfully signed!');
    }
  };

  return (
    <div className="card-base p-6 bg-white rounded-lg shadow-md border border-neutral-200 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary-700">Document Chamber</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition flex items-center gap-2">
          <Upload size={18} /> Upload PDF
        </button>
      </div>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-error-100 text-error-600 rounded-md">
                <FileText size={20} />
              </div>
              <p className="font-medium text-neutral-900">{doc.name}</p>
            </div>

            <div className="flex items-center gap-4">
              {getStatusBadge(doc.status)}
              {doc.status !== 'Signed' && (
                <button
                  onClick={() => { setSelectedDocId(doc.id); setShowSignaturePad(true); }}
                  className="text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center gap-1"
                >
                  <Edit3 size={14} /> E-Sign
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showSignaturePad && (
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-neutral-900">Digital Signature</h3>
              <button onClick={() => setShowSignaturePad(false)} className="text-neutral-500 hover:text-neutral-800">
                <X size={20} />
              </button>
            </div>

            <p className="text-sm text-neutral-600 mb-2">Please draw your signature below:</p>

            <div className="w-full h-40 border-2 border-dashed border-neutral-300 rounded-md bg-neutral-50 flex flex-col items-center justify-center mb-6 cursor-crosshair">
              <Edit3 size={32} className="text-neutral-300 mb-2" />
              <span className="text-neutral-400 text-sm">Sign Here</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSignaturePad(false)}
                className="flex-1 py-2 bg-neutral-200 text-neutral-700 font-medium rounded hover:bg-neutral-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSignDocument}
                className="flex-1 py-2 bg-primary-600 text-white font-medium rounded hover:bg-primary-700 transition"
              >
                Sign Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
