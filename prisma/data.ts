interface ISubject {
  name: string;
  description: string;
}

export const subjects: ISubject[] = [
  {
    name: 'Tables',
    description:
      'Explore comprehensive details about tables created within your workspace, including their purpose, subject area, associated pipelines, notebooks, data sources, ownership information, metadata attributes, and more.',
  },
  {
    name: 'Pipelines',
    description:
      'Gain insights into Azure Data Factory pipelines, understanding their execution frequency, objectives, linked data sources, associated entities, dependencies, scheduling details, and other pertinent attributes crucial for managing data workflows effectively.',
  },
  {
    name: 'Dashboards',
    description:
      'Delve into detailed insights regarding Power BI dashboards, understanding their specific purposes, linked datasets, intended audience, update schedules, visualization configurations, and other essential characteristics for optimizing data presentation and consumption.',
  },
  {
    name: 'Data Providers',
    description:
      'Discover comprehensive details about the source systems collaborating with your workspace, including insights into the data they share, their integration methods, data formats, frequency of updates, and other essential attributes critical for data ingestion and management.',
  },
  {
    name: 'Data Consumers',
    description:
      'Gain insights into the systems consuming data from your workspace, understanding their data consumption patterns, integration methods, data usage, and other pertinent details essential for optimizing data delivery and meeting consumer requirements.',
  },
  {
    name: 'FAQs',
    description:
      'Access a repository of frequently asked questions (FAQs) directed to your team, providing comprehensive answers to common queries, enabling efficient communication and knowledge sharing within your organization.',
  },
];
