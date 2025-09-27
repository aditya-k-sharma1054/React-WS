import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import Counter from '../components/reactbits/Counter';

export default function TodoApp(){
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState('');

  function addTask(){
    if (!text.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: text.trim(), datetime: datetime || null, done: false }]);
    setText(''); setDatetime('');
  }

  function toggleDone(id){
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function removeTask(id){
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const completed = tasks.filter(t => t.done).length;
  const data = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: tasks.length - completed }
  ];

  return (
    <div>
      <div className="glass" style={{maxWidth:900}}>
        <h2>To-Do</h2>

        <div style={{display:'flex', gap:8, marginTop:8}}>
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Task title" style={{padding:8, flex:1}}/>
          <input type="datetime-local" value={datetime} onChange={e=>setDatetime(e.target.value)} style={{padding:8}} />
          <button onClick={addTask} className="btn">Add</button>
        </div>

        <ul style={{marginTop:12}}>
          {tasks.map(t=>(
            <li key={t.id} style={{display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
              <div>
                <div style={{fontWeight:600}}>{t.text}</div>
                <div style={{fontSize:12, opacity:0.8}}>{t.datetime || 'No date'}</div>
              </div>
              <div style={{display:'flex', gap:8}}>
                <button onClick={()=>toggleDone(t.id)} className="small-btn" style={{background: t.done ? '#10B981' : 'transparent'}}>{t.done ? 'Undo' : '✔'}</button>
                <button onClick={()=>removeTask(t.id)} className="small-btn" style={{background:'#EF4444'}}>✖</button>
              </div>
            </li>
          ))}
        </ul>

        <div style={{marginTop:16, display:'flex', gap:20, alignItems:'center'}}>
          <PieChart width={140} height={140}>
            <Pie data={data} dataKey="value" outerRadius={60}>
              {data.map((entry, idx)=>(<Cell key={idx} fill={idx===0? '#10B981' : '#F97316'} />))}
            </Pie>
          </PieChart>
          <div>
            <div>Completed</div>
            <Counter end={completed} duration={0.8} />
          </div>
        </div>
      </div>
    </div>
  );
}