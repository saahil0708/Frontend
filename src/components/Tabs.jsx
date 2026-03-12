import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import './Tabs.css';
import SpeakersSlider from './SpeakersSlider';
import { nationalSpeakers, internationalSpeakers } from '../data/speakers';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const SpeakersTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-wrapper">
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(0, 82, 69, 0.1)', display: 'flex', justifyContent: 'center' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="speaker categories"
          className="custom-tabs"
          TabIndicatorProps={{ style: { background: 'var(--teal)', height: '3px', borderRadius: '3px' } }}
        >
          <Tab label="National Speakers" className="tab-item" />
          <Tab label="International Speakers" className="tab-item" />
        </Tabs>
      </Box>
      
      <CustomTabPanel value={value} index={0}>
        <SpeakersSlider speakers={nationalSpeakers} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SpeakersSlider speakers={internationalSpeakers} />
      </CustomTabPanel>
    </div>
  );
};

export default SpeakersTabs;
