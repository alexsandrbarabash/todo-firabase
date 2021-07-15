import React from 'react';
import { Grid, IconButton, TextField, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MultiSwitch from 'react-multi-switch-toggle';
import { useDispatch } from 'react-redux';
import './filter-form.css';
import { changeSortByTitle, sortByStatus } from '../../redux/actions/user-action';

const FilterForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <Grid container>
          <Grid item xs={11}>
            <TextField required className={'form-input'} label={'Search'}/>
          </Grid>
          <Grid item xs={1}>
            <Box pb={1}>
              <IconButton type={'submit'}>
                <SearchIcon/>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Box mt={2}>
        <Grid container>
          <Grid item xs={12} className={'multi-switch-wrapper'}>
            <MultiSwitch
              texts={[
                'all',
                'only completed',
                'only not completed'
              ]}
              selectedSwitch={0}
              bgColor={'#fff'}
              fontColor={'#1C1C1C'}
              selectedFontColor={'#fff'}
              selectedSwitchColor={'#3F51B5'}
              eachSwitchWidth={150}
              height={'30px'}
              fontSize={'16px'}
              borderColor={'transparent'}
              onToggleCallback={(value) => dispatch(sortByStatus(value))}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <Grid container>
          <Grid item xs={12} className={'multi-switch-wrapper'}>
            <MultiSwitch
              texts={[
                'A-Z',
                'Z-A',
              ]}
              selectedSwitch={0}
              bgColor={'#fff'}
              fontColor={'#1C1C1C'}
              selectedFontColor={'#fff'}
              selectedSwitchColor={'#3F51B5'}
              eachSwitchWidth={150}
              height={'30px'}
              fontSize={'16px'}
              borderColor={'transparent'}
              onToggleCallback={(value) => dispatch(changeSortByTitle(value))}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FilterForm;
