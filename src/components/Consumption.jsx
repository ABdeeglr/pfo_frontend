const __data = [
    {
      "rec_id": 1,
      "use_id": 1,
      "amo": "82.30",
      "con_dat": "2025-03-21T07:07:23.000Z",
      "des": "散装精品有机鹰嘴豆十斤装"
    },
    {
      "rec_id": 2,
      "use_id": 1,
      "amo": "189.00",
      "con_dat": "2025-03-21T07:08:15.000Z",
      "des": "家用血压检测设备"
    },
    {
      "rec_id": 3,
      "use_id": 1,
      "amo": "22.80",
      "con_dat": "2025-03-19T09:22:18.000Z",
      "des": "小玩具配件"
    }
];

const Consumption = ({data}) => {
  return (
    <div>
      <h1>消费记录</h1>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>记录 ID</th>
            <th>用户 ID</th>
            <th>金额 (元)</th>
            <th>消费日期</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.rec_id}>
              <td>{item.rec_id}</td>
              <td>{item.use_id}</td>
              <td>{item.amo}</td>
              <td>{new Date(item.con_dat).toLocaleString()}</td>
              <td>{item.des}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Consumption;