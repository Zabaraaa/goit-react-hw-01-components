import PropTypes from 'prop-types'; 
import { StatisticsContainer, StatisticsList, StatisticsItem, Percentage  } from './statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
<StatisticsContainer class="statistics">
            {title && <h2>{title}</h2>}

    <StatisticsList class="stat-list"> {stats.map(stat => 
                <StatisticsItem key={stat.id} class="item">
                    <span class="label">{stat.label}</span>
                    <Percentage class="percentage">{stat.percentage}%</Percentage >
                </StatisticsItem>)}
    </StatisticsList>
</StatisticsContainer>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
})).isRequired
}