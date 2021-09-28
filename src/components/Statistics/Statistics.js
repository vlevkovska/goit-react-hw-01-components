import PropTypes from 'prop-types';
import s from './statistics.module.css';
import backgroundColor from './colorGenerator';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {/* {!title ? !title : <h2 className={s.title}>{title}</h2>} */}
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: backgroundColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
