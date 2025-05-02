/*
{id:1, name:'小明', score:55},
{id:2, name:'小美', score:78},
{id:3, name:'小華', score:92},
{id:4, name:'阿強', score:40},

顯示 table 樣式
id | name | score | pass
 1   小明    55      X 
 2   小美    78      V 
 3   小華    92      V 
 4   阿強    40      X 
全班平均: XX

試著拆分父子組件
*/


// 子組件: 表頭
function ScoreTableHeader() {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>score</th>
          <th>pass</th>
        </tr>
      </thead>
    );
  }
  
  // 子組件: 表身
  function ScoreTableBody({ scores }) {
    return (
      <tbody>
        {aaa.map((std) => {
          const pass = std.score >= 60 ? "V" : "X";
          return (
            <tr key={std.id}>
              <td>{std.id}</td>
              <td>{std.name}</td>
              <td align="right">{std.score}</td>
              <td align="right">{pass}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  
  // 子組件: 表尾
  function ScoreTableFooter({ avgScore }) {
    return (
      <tfoot>
        <tr>
          <td colSpan="4" align="right">
            全班平均:{avgScore}
          </td>
        </tr>
      </tfoot>
    );
  }
  
  // 子組件: 主表
  function ScoreTable({ scores, avgScore }) {
    return (
      <table border="1" cellPadding="5" cellSpacing="0">
        <ScoreTableHeader />
        <ScoreTableBody scores={scores} />
        <ScoreTableFooter avgScore={avgScore} />
      </table>
    );
  }
  
  // 父組件
  function App() {
    const scores = [
        {id:1, name:'小明', score:55},
        {id:2, name:'小美', score:78},
        {id:3, name:'小華', score:92},
        {id:4, name:'阿強', score:40},
    ];
    const avgScore = scores.reduce((sum, std) => sum + std.score, 0) / scores.length;

  
    return (
      <>
        <h1>成績列表</h1>
        <ScoreTable scores={scores} avgScore={avgScore}/>
      </>
    );
  }
  
  export default App;
  