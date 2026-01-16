import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { contentSubjects, contentItems } from '../data/contentData';

const DataUploader: React.FC = () => {
  const [status, setStatus] = useState('Idle');

  const uploadData = async () => {
    setStatus('Uploading Subjects...');
    
    // 1. Upload Subjects
    const { error: subjectError } = await supabase
      .from('subjects')
      .upsert(contentSubjects.map(s => ({
        id: s.id,
        name: s.name,
        code: s.code,
        year: s.year,
        semester: s.semester,
        branch: s.branch,
        description: s.description,
        icon: s.icon
      })));

    if (subjectError) {
      console.error(subjectError);
      setStatus('Error uploading subjects!');
      return;
    }

    setStatus('Uploading Content...');

    // 2. Upload Content (Batching to avoid timeouts)
    const chunkSize = 50;
    for (let i = 0; i < contentItems.length; i += chunkSize) {
      const chunk = contentItems.slice(i, i + chunkSize);
      const { error: contentError } = await supabase
        .from('content_items')
        .upsert(chunk.map(c => ({
          id: c.id,
          title: c.title,
          description: c.description,
          type: c.type,
          subject_id: c.subjectId,
          view_url: c.viewUrl,
          file_size: c.fileSize,
          upload_date: new Date(c.uploadDate).toISOString()
        })));
        
      if (contentError) {
        console.error(contentError);
        setStatus(`Error uploading content at index ${i}`);
        return;
      }
    }

    setStatus('Success! All data uploaded to Supabase.');
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Database Seeder</h1>
      <p className="mb-4">Click to move local data to Supabase</p>
      <button 
        onClick={uploadData}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {status}
      </button>
    </div>
  );
};

export default DataUploader;