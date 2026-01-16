// import React, { useState } from 'react';
// import { supabase } from '../supabaseClient';
// import { contentSubjects, contentItems } from '../data/contentData';

// const DataUploader: React.FC = () => {
//   const [status, setStatus] = useState('Idle');

//   const uploadData = async () => {
//     setStatus('Uploading Subjects...');
    
//     // 1. Upload Subjects
//     const { error: subjectError } = await supabase
//       .from('subjects')
//       .upsert(contentSubjects.map(s => ({
//         id: s.id,
//         name: s.name,
//         code: s.code,
//         year: s.year,
//         semester: s.semester,
//         branch: s.branch,
//         description: s.description,
//         icon: s.icon
//       })));

//     if (subjectError) {
//       console.error(subjectError);
//       setStatus('Error uploading subjects!');
//       return;
//     }

//     setStatus('Uploading Content...');

//     // 2. Upload Content (Batching to avoid timeouts)
//     const chunkSize = 50;
//     for (let i = 0; i < contentItems.length; i += chunkSize) {
//       const chunk = contentItems.slice(i, i + chunkSize);
//       const { error: contentError } = await supabase
//         .from('content_items')
//         .upsert(chunk.map(c => ({
//           id: c.id,
//           title: c.title,
//           description: c.description,
//           type: c.type,
//           subject_id: c.subjectId,
//           view_url: c.viewUrl,
//           file_size: c.fileSize,
//           upload_date: new Date(c.uploadDate).toISOString()
//         })));
        
//       if (contentError) {
//         console.error(contentError);
//         setStatus(`Error uploading content at index ${i}`);
//         return;
//       }
//     }

//     setStatus('Success! All data uploaded to Supabase.');
//   };

//   return (
//     <div className="p-10 text-center">
//       <h1 className="text-2xl font-bold mb-4">Database Seeder</h1>
//       <p className="mb-4">Click to move local data to Supabase</p>
//       <button 
//         onClick={uploadData}
//         className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//       >
//         {status}
//       </button>
//     </div>
//   );
// };

// export default DataUploader;
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { contentSubjects, contentItems } from '../data/contentData';

const DataUploader: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  const uploadData = async () => {
    setIsLoading(true);
    setLogs(['Starting upload process...']);

    try {
      // 1. Process Subjects (Deduplicate and Merge Branches)
      addLog(`Processing ${contentSubjects.length} subjects...`);
      
      const uniqueSubjectsMap = new Map();

      contentSubjects.forEach(sub => {
        if (uniqueSubjectsMap.has(sub.id)) {
          // If subject exists, merge the branch names
          const existing = uniqueSubjectsMap.get(sub.id);
          if (!existing.branch.includes(sub.branch)) {
            existing.branch = `${existing.branch}, ${sub.branch}`;
          }
        } else {
          uniqueSubjectsMap.set(sub.id, { ...sub });
        }
      });

      const cleanSubjects = Array.from(uniqueSubjectsMap.values());
      addLog(`Merged into ${cleanSubjects.length} unique subjects.`);

      // 2. Upload Subjects
      const { error: subjectError } = await supabase
        .from('subjects')
        .upsert(cleanSubjects.map(s => ({
          id: s.id,
          name: s.name,
          code: s.code,
          year: s.year,
          semester: s.semester,
          branch: s.branch,
          description: s.description,
          icon: s.icon
        })), { onConflict: 'id' });

      if (subjectError) {
        throw new Error(`Subject Upload Failed: ${subjectError.message} (Code: ${subjectError.code})`);
      }
      addLog('✅ Subjects uploaded successfully!');

      // 3. Upload Content (Batching)
      addLog(`Processing ${contentItems.length} content items...`);
      const chunkSize = 50;
      for (let i = 0; i < contentItems.length; i += chunkSize) {
        const chunk = contentItems.slice(i, i + chunkSize);
        
        // Remove duplicate IDs within the same batch just in case
        const uniqueChunk = Array.from(new Map(chunk.map(item => [item.id, item])).values());

        const { error: contentError } = await supabase
          .from('content_items')
          .upsert(uniqueChunk.map(c => ({
            id: c.id,
            title: c.title,
            description: c.description,
            type: c.type,
            subject_id: c.subjectId,
            view_url: c.viewUrl,
            file_size: c.fileSize,
            upload_date: new Date(c.uploadDate).toISOString() // Ensure date format
          })), { onConflict: 'id' });

        if (contentError) {
           throw new Error(`Content Batch ${i} Failed: ${contentError.message}`);
        }
        addLog(`✅ Batch ${i} - ${i + chunk.length} uploaded.`);
      }

      addLog('🎉 SUCCESS! All data is now in Supabase.');

    } catch (err: any) {
      console.error(err);
      addLog(`❌ ERROR: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Database Seeder</h1>
      
      <button 
        onClick={uploadData}
        disabled={isLoading}
        className={`w-full py-4 rounded-lg font-bold text-lg mb-6 transition-colors ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isLoading ? 'Uploading...' : 'Start Upload'}
      </button>

      <div className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-auto font-mono text-sm border border-gray-300">
        {logs.length === 0 ? (
          <p className="text-gray-500">Logs will appear here...</p>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={`mb-2 ${log.includes('ERROR') ? 'text-red-600 font-bold' : 'text-gray-700'}`}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DataUploader;