const DATA_EN = {
    ui: { title1:'Technical maintenance', title2:'Cold room', lead:'Keeping the cold room in good condition ensures the efficiency, safety and service life of the equipment.', index:'Contents', openAll:'Expand all', closeAll:'Collapse all', tapHint:'Tap a number to locate the component.', print:'Print', back:'Back to top', section:'Section' },
    s1: { t:'Objective', p:'Ensure the correct operation of the system, prevent failures, extend the service life of the components and properly preserve the stored products.' },
    s2: { t:'Safety and PPE', checks:['Disconnect the power supply.','Use personal protective equipment (PPE).','Work in a ventilated area.','Do not handle the refrigerant.','Keep the area clean and tidy.'], epp:['Helmet','Safety glasses','Gloves','Safety footwear','Workwear (tear-resistant)'] },
    s3: { t:'Main components', alt:'Photo of the cold room with numbered components', items:['Control panel','Electrical panel','Indicator light panel','Pressure switch','Filter drier','Condenser','Motor compressor','Valve group (liquid and vacuum control)'] },
    s4: { t:'Preventive maintenance plan', cols:['Frequency','Main tasks'], rows:[
      ['Daily',['Check temperature.','Check for noise and vibration.','Look for leaks.','Check the general condition of the equipment.']],
      ['Weekly',['Clean grilles and filters.','Check condensate drainage.','Check fan operation.']],
      ['Monthly',['Clean condenser and evaporator.','Check working pressure.','Check the condition of door gaskets and doors.']],
      ['Semi-annual / Annual',['Check electrical connections.','Check the refrigerant condition.','Check pressure switches, valves and thermostat.','Clean the system.']]] },
    s5: { t:'Evaporator and condenser cleaning', groups:[
      ['Evaporator',['Disconnect the power supply.','Remove ice or frost.','Clean with a soft brush and warm water.','Check that the drains are clear.','Dry and put back into operation.']],
      ['Condenser',['Disconnect the power supply.','Remove dust and dirt.','Clean with compressed air or a soft brush.','Check that the fans work properly.','Check that there are no obstructions to the airflow.']]] },
    s6: { t:'Electrical inspection', checks:['Check the condition of cables and connections.','Check the operation of the control panel and contactors.','Check the condition of the fans.','Confirm the thermostat works correctly.','Check the high and low pressure switches.','Ensure proper grounding.'] },
    s7: { t:'Pressure and temperature control', cols:['Parameter','Typical range','Notes'], rows:[
      ['High (condensing)','150 - 250 psi','Varies with the refrigerant and ambient temperature.'],
      ['Low (evaporating)','20 - 45 psi','Varies with the cold room temperature and the refrigerant.'],
      ['Cold room temperature','-18 °C to 0 °C','Depends on the type of product.'],
      ['Discharge temperature','70 - 90 °C','Must not exceed the manufacturer’s limits.']] },
    s8: { t:'Refrigerant leak detection', checks:['Inspect joints, welds and valves.','Check system pressures and temperatures.','Apply soapy water to joints (complementary method).','Use an electronic leak detector.'] },
    s9: { t:'Defrost inspection', checks:['Check that the cycle works correctly.','Check the condition of the heaters.','Make sure the defrost water drains properly.','Check the defrost timer or control.'] },
    s10: { t:'Doors, gaskets and insulation', checks:['Check that the gaskets seal properly.','Check hinges and locks.','Check that there are no air leaks.','Inspect the condition of the panel insulation.'] },
    s11: { t:'Common failures and possible causes', cols:['Problem','Possible causes'], rows:[
      ['Not cooling','Lack of refrigerant, damaged compressor, thermostat.'],
      ['Unstable temperature','Faulty sensor or thermostat.'],
      ['Abnormal noise','Fans, compressor, mounts.'],
      ['Excess frost','Defrost failure, door not properly closed.'],
      ['High power consumption','Dirty condenser, air leak, poor insulation.'],
      ['Water leak','Clogged drain, defrost.']] },
    s12: { t:'Maintenance log', sub:'(record)', cols:['Date','Task','Done (✓)','Notes'], resp:'Responsible', firma:'Signature' },
    s13: { t:'Procedure in case of failure', steps:['Stop the equipment (if necessary).','Check temperature and pressures.','Check basic components (panel, fans, compressor, valves).','Look for leaks or blockages.','Record the failure and the action taken.'] },
    s14: { t:'Final recommendations', checks:['Carry out maintenance at the indicated intervals.','Keep a record of all interventions.','Use original or equivalent-quality spare parts.','Do not overload the cold room.','Keep the area clean and tidy.','Take care of the equipment to extend its service life.'] }
  };
