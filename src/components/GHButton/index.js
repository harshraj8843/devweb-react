import React, { useState, useEffect } from "react";

import ButtonLink from "../ButtonLink";

const GHButton = ({
  resource: { attr, endpoint },
  timeout = 10, // 10 mins
  ...btnProps
}) => {
  const [loading, setLoading] = useState(false);

  const buildRecordObject = (data) => {
    return {
      data,
      lastChecked: Date.now(),
    };
  };

  const isRecordExpired = (record, timeout) => {
    return Date.now() > record.lastChecked + timeout * 60 * 1000;
  };

  const isRecordUsable = (record, timeout) => {
    return record.data !== undefined && !isRecordExpired(record, timeout);
  };

  const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      const defaultObj = buildRecordObject(defaultValue);
      let value;

      try {
        value = JSON.parse(
          window.localStorage.getItem(key) || JSON.stringify(defaultObj)
        );
      } catch (e) {
        value = defaultObj;
      }
      return value;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
  };

  const [attrCountRecord, setAttrCountRecord] = useLocalStorageState(
    attr,
    undefined
  );

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(endpoint);
      const json = await response.json();

      if (json[attr] >= 0) {
        setAttrCountRecord(buildRecordObject(json[attr]));
      }

      setLoading(false);
    };

    if (!isRecordUsable(attrCountRecord, timeout)) {
      fetchApi();
    }
  });

  return (
    <ButtonLink
      {...btnProps}
      showCount={!loading && attrCountRecord !== undefined}
      count={attrCountRecord.data}
    />
  );
};

export default GHButton;
