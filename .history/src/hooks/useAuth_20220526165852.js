import React, { useState, useContext, createContext} from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();